const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "image.png";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Outfit" },
      { name: "Hair" },
      { name: "Face" },
      { name: "Mouth" },
      { name: "Eyes" },
      // { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 125,
    layersOrder: [
      { name: "Background" },
      { name: "Outfit" },
      { name: "Hair" },
      { name: "Face" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Background" },
      { name: "Outfit" },
      { name: "Hair" },
      { name: "Face" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Earrings" },
      { name: "Unique_accessories" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 4000,
  height: 4000,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  "seller_fee_basis_points": 250, // this defines your royalties (250 = 2.5% || 1000 = 10% || etc)
  "collection": {
    "name": "Braniacs", // the name of your collection
    "family": "Braniacs" //the family of your collection
  },
  "properties": {
    "files": [
      {
        "uri": "image.png",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
      {
        "address": "0xEbb0e214AF981339289DC8355E56231186b5A7E0", // the address you want to receive your payments
        "share": 100
      }
    ]
  }
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
