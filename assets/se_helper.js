const fastParser = require('fast-xml-parser');

module.exports = {
  loadBaseBlocks: async function() {
    const files = [ 'CubeBlocks', 'CubeBlocks_Armor', 'CubeBlocks_Armor_2', 'CubeBlocks_Automation', 'CubeBlocks_Communications', 'CubeBlocks_Control', 'CubeBlocks_DecorativePack',
      'CubeBlocks_DecorativePack2', 'CubeBlocks_Doors', 'CubeBlocks_Economy', 'CubeBlocks_Energy', 'CubeBlocks_Extras', 'CubeBlocks_Frostbite', 'CubeBlocks_Gravity', 'CubeBlocks_Interiors',
      'CubeBlocks_LCDPanels', 'CubeBlocks_Lights', 'CubeBlocks_Logistics', 'CubeBlocks_Mechanical', 'CubeBlocks_Medical', 'CubeBlocks_Production', 'CubeBlocks_ScrapRacePack',
      'CubeBlocks_SparksOfTheFuturePack', 'CubeBlocks_Symbols', 'CubeBlocks_Thrusters', 'CubeBlocks_Tools', 'CubeBlocks_Utility', 'CubeBlocks_Warfare1', 'CubeBlocks_Weapons', 'CubeBlocks_Wheels',
      'CubeBlocks_Windows', 'CubeBlocks_ArmorPanels', 'CubeBlocks_Armor_3', 'CubeBlocks_IndustrialPack', 'CubeBlocks_Warfare2'];

    const blocks = [];
    for (let i = 0; i < files.length; i++){
      const response = await fetch(`https://organom.github.io/secalculator/cubeblocks/${files[i]}.sbc`,{mode: 'no-cors'})
      const xml = await response.text();
      const parser = new fastParser.XMLParser({
        attributeNamePrefix: '@_',
        ignoreAttributes: false,
      });
      const jsonObj = await parser.parse(xml);
      if(jsonObj.Definitions) {
        blocks.push(jsonObj.Definitions.CubeBlocks.Definition);
      }
    }
    return blocks.flat();
  }
};
