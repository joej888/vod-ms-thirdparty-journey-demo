
const success = {
  mock: {
    ok: true,
    status: 200,
    data: {
      result: [
        {
          model: '10.2 INCH IPAD WI-FI CELLULAR 128GB SPACE GREY',
          colourName: null,
          colourCode: null,
          size: null,
          deviceId: null,
          stockavailable: false,
          cashPrice: null,
          priceFrom: null,
          priceMax: null,
          availableQuantity: null,
          stockExpectedDate: null,
          baseDeviceId: null,
          seoUrl: null,
          priorityOverall: null,
          imageSourceTiny: null,
          imageSourceSmall: null,
          imageSourceMedium: null,
          imageSourceLarge: null,
          imageSourceHuge: null,
          line500Code: '108017436',
          insuranceCode: null,
          onlineChannel: null,
          deviceTypeName: null,
          manufacturer: 'Apple',
          cvmcampaignid: null,
          deviceGroupName: null,
          links: []
        },
        {
          model: 'Vhome - starter kit',
          colourName: null,
          colourCode: null,
          size: null,
          deviceId: null,
          stockavailable: false,
          cashPrice: null,
          priceFrom: null,
          priceMax: null,
          availableQuantity: null,
          stockExpectedDate: null,
          baseDeviceId: null,
          seoUrl: null,
          priorityOverall: null,
          imageSourceTiny: null,
          imageSourceSmall: null,
          imageSourceMedium: null,
          imageSourceLarge: null,
          imageSourceHuge: null,
          line500Code: '108017436',
          insuranceCode: null,
          onlineChannel: null,
          deviceTypeName: null,
          manufacturer: 'Apple',
          cvmcampaignid: null,
          deviceGroupName: null,
          links: []
        }
      ]
    }
  }
};

const expected = {
  data: {
    result: [
      {
        model: '10.2 INCH IPAD WI-FI CELLULAR 128GB SPACE GREY',
        colourName: null,
        colourCode: null,
        size: null,
        deviceId: null,
        stockavailable: false,
        cashPrice: null,
        priceFrom: null,
        priceMax: null,
        availableQuantity: null,
        stockExpectedDate: null,
        baseDeviceId: null,
        seoUrl: null,
        priorityOverall: null,
        imageSourceTiny: null,
        imageSourceSmall: null,
        imageSourceMedium: null,
        imageSourceLarge: null,
        imageSourceHuge: null,
        line500Code: '108017436',
        insuranceCode: null,
        onlineChannel: null,
        deviceTypeName: null,
        manufacturer: 'Apple',
        cvmcampaignid: null,
        deviceGroupName: null,
        links: []
      },
      {
        model: 'Vhome - starter kit',
        colourName: null,
        colourCode: null,
        size: null,
        deviceId: null,
        stockavailable: false,
        cashPrice: null,
        priceFrom: null,
        priceMax: null,
        availableQuantity: null,
        stockExpectedDate: null,
        baseDeviceId: null,
        seoUrl: null,
        priorityOverall: null,
        imageSourceTiny: null,
        imageSourceSmall: null,
        imageSourceMedium: null,
        imageSourceLarge: null,
        imageSourceHuge: null,
        line500Code: '108017436',
        insuranceCode: null,
        onlineChannel: null,
        deviceTypeName: null,
        manufacturer: 'Apple',
        cvmcampaignid: null,
        deviceGroupName: null,
        links: []
      }
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
