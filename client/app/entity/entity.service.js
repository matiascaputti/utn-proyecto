(function () {
	'use strict';

    var RestServices = angular.module('restServices', []);

    RestServices.provider('restConfig', [function (){
        var baseUrl = '/api';

        this.setBaseUrl = function (url) {
            baseUrl = url;
        };

        this.$get = function (Restangular) {
            return {
                getBaseUrl: function () {
                    return baseUrl;
                },
                getRestForEntity: function (entityName) {
                    var baseUrl = this.getBaseUrl();
                    return Restangular.withConfig(function (RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl(baseUrl);
                        // add headers for authentication based request
                        // override default 'id' with '_id' to work with mongoDB
                        RestangularConfigurer.setRestangularFields({ id:'_id'});
                    }).service(entityName);
                }
            };    
        };
    }]);

    RestServices.factory('entityService', function ($q, Restangular, restConfig) {
        return {
            getCrudFor: function (entityName, formatters) {
                return {
                    formatters: formatters,
                    rest: restConfig.getRestForEntity(entityName),
                    getNested: function (nestedEntity) {
                        return Restangular.service(nestedEntity, Restangular.all(entityName));
                    },
                    getAll: function () {
                        return this.rest.getList();
                    },
                    update: function (entity) {
                        // entity.put() is not working when the entity is copied with Restangular.copy()
                        if (formatters && formatters.preUpdate) {
                            return this.rest.one(entity._id).customPUT(formatters.preUpdate(entity).plain());
                        }
                        return this.rest.one(entity._id).customPUT(entity.plain());
                    },
                    save: function (entity) {
                        if (formatters && formatters.preSave) {
                            return this.rest.post(formatters.preSave(entity));
                        }
                        return this.rest.post(entity);
                    },
                    remove: function (entity) {
                        return entity.remove();
                        // return this.rest.one('remove').one(entity.id.toString()).post(); 
                    },
                    createEntity: function () {
                        return this.rest.one();
                    },
                    get: function (id) {
                        return this.rest.one(id).get();
                    },
                    copy: function(original) {
                        return Restangular.copy(original);
                    },
                    newEntity:  function () { //to override in the specific services
                        return {};
                    }
                };
            }
        };
    });
}());