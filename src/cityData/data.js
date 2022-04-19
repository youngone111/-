let data = require("./data.json");
let provinceObject = data["86"];
let regionData = [];
let provinceAndCityData = [];
for (const prop in provinceObject) {
  regionData.push({
    value: prop, // 省份code值
    label: provinceObject[prop] // 省份汉字
  });
}
for (let i = 0, len = regionData.length; i < len; i++) {
  const provinceCode = regionData[i].value;
  const provinceText = regionData[i].label;
  const provinceChildren = [];
  for (const prop in data[provinceCode]) {
    provinceChildren.push({
      value: prop,
      label: data[provinceCode][prop]
    });
  }
  if (provinceChildren.length) {
    regionData[i].children = provinceChildren;
  }
}
provinceAndCityData = regionData;

// 计算区
for (let i = 0, len = regionData.length; i < len; i++) {
  const province = regionData[i].children;
  const provinceText = regionData[i].label;
  if (province) {
    for (let j = 0, len = province.length; j < len; j++) {
      const cityCode = province[j].value;
      const cityText = province[j].label;
      const cityChildren = [];
      for (const prop in data[cityCode]) {
        cityChildren.push({
          value: prop,
          label: data[cityCode][prop]
        });
      }
      if (cityChildren.length) {
        province[j].children = cityChildren;
      }
    }
  }
}
export { regionData };
