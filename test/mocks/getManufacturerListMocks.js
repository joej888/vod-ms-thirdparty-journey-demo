
const success = {
  mock: {
    ok: true,
    status: 200,
    data: {
      result: {
        properties: {
          deviceType: [
            'Smartphones',
            'Tablets',
            'Accessory',
            'Routers / Modems / Laptops',
            'Lifestyle'
          ],
          brandName: [
            'Apple',
            'Samsung',
            'Huawei',
            'Lenovo',
            'Sony Ericsson',
            'ZTE',
            'Xiaomi',
            'Sony',
            'Nokia',
            'LG',
            'Hisense'
          ],
          ebuUrl: 'https://www.vodacombusiness.co.za/business/deals/devices',
          gridviewUrl: '/cloud/shopping/devices',
          orderconfirmationUrl: '/cloud/shopping/order-summary?salesChannel=Upgrade',
          redirectTimeout: 2000,
          legacyAllowed: false
        }
      }
    }
  }
};

const expected = {
  data: {
    result: [
      'Apple',
      'Samsung',
      'Huawei',
      'Lenovo',
      'Sony Ericsson',
      'ZTE',
      'Xiaomi',
      'Sony',
      'Nokia',
      'LG',
      'Hisense'
    ]
  }
};

const failure = {
  mock: {
    ok: false,
    error: {
      response: {
        status: 400,
        statusText: 'Bad Request'
      }
    }
  },
  expected: {
    result: {
      status: 400,
      error: 'Bad Request',
      message: 'Bad Request'
    }
  }
};

module.exports = {
  success,
  failure,
  expected
};
