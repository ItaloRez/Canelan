var APP_DATA = {
  scenes: [
    {
      id: "0-loja-fundos",
      name: "Loja Fundos",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.22607964903373912,
          pitch: 0.4051635491362937,
          rotation: 0,
          target: "1-loja",
        },
      ],
      infoHotspots: [
        {
          yaw: 2.5841797377669025,
          pitch: -0.09268107343075016,
          title: "Coleção de inverno",
          text: "Venha comprar em nossa loja ou visite nosso site:<div><br></div><div><div><a href='https://www.canelantricot.com.br'>https://www.canelantricot.com.br</a><br></div></div>",
        },
        {
          yaw: -1.5687783456781084,
          pitch: -0.09141871575010185,
          title: "Title",
          text: "Text",
        },
      ],
    },
    {
      id: "1-loja",
      name: "Loja",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.2062354829714188,
          pitch: 0.5639578899576527,
          rotation: 0,
          target: "2-entrada2",
        },
        {
          yaw: -3.1360023732299034,
          pitch: 0.42782569351663113,
          rotation: 0,
          target: "0-loja-fundos",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-entrada2",
      name: "Entrada2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.4834033465544927,
          pitch: 0.5561369543681387,
          rotation: 0,
          target: "3-entrada1",
        },
        {
          yaw: 3.0020116931678515,
          pitch: 0.3336148162286534,
          rotation: 0,
          target: "1-loja",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "3-entrada1",
      name: "Entrada1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.4310039941893038,
          pitch: 0.46471873962348376,
          rotation: 0,
          target: "2-entrada2",
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "Canelan",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: false,
    viewControlButtons: false,
  },
};
