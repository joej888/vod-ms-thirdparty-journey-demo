const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.getDeviceModels');
const { devicesService } = require('vod-npm-services');
const client = require('restify-prom-bundle').client;
const getDeviceModelsError = new client.Counter({
  name: 'counter_get_app_device_models_error',
  help: 'vod-ms-devices client call error'
});

exports.handler = async function getDeviceModels(req, res, next) {

  Sentry.info('Beginning getDeviceModels...', {}, sentryCategory);
  const params = {
    headers: req.headers,
    manufacturer: req.query.brandName
  };

  const response = await devicesService.getDeviceModels(req, params);
  const jsonData = response.data.result

  function getModelsDetails(model){
    let modelDetails = {
      "name": "model",
      "valueType": "string",
      "productSpecCharacteristicValue":
        {
          "value": model.model,
      }
    }
    return modelDetails
  }

 function getMapped(jsonData){
    return jsonData.map(getModelsDetails);
  }

  let myArr = getMapped(jsonData);
  let fullArray =   {
    "brand": req.query.brandName,
    "description": "model name of devices",
    "productSpecCharacteristic": myArr
   }

  if (!response.ok) {
    getDeviceModelsError.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json(fullArray);
  return next();
};

