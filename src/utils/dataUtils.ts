interface CropData {
    year: number;
    crop: string;
    production: number;
    yield: number;
    area: number;
  }
  
  export const calculateMaxMinProduction = (data: CropData[]) => {
    const yearMap = new Map<number, { maxCrop: string, minCrop: string, maxProduction: number, minProduction: number }>();
  
    data.forEach(record => {
      const existing = yearMap.get(record.year) || { maxCrop: '', minCrop: '', maxProduction: 0, minProduction: Infinity };
      
      if (record.production > existing.maxProduction) {
        existing.maxCrop = record.crop;
        existing.maxProduction = record.production;
      }
      if (record.production < existing.minProduction) {
        existing.minCrop = record.crop;
        existing.minProduction = record.production;
      }
      yearMap.set(record.year, existing);
    });
  
    return Array.from(yearMap.entries()).map(([year, record]) => ({
      year,
      cropWithMaxProduction: record.maxCrop,
      cropWithMinProduction: record.minCrop
    }));
  };
  
  export const calculateAverageYieldAndArea = (data: CropData[]) => {
    const cropMap = new Map<string, { totalYield: number, totalArea: number, count: number }>();
  
    data.forEach(record => {
      const existing = cropMap.get(record.crop) || { totalYield: 0, totalArea: 0, count: 0 };
      existing.totalYield += record.yield || 0;
      existing.totalArea += record.area || 0;
      existing.count += 1;
      cropMap.set(record.crop, existing);
    });
  
    return Array.from(cropMap.entries()).map(([crop, stats]) => ({
      crop,
      averageYield: (stats.totalYield / stats.count).toFixed(3),
      averageArea: (stats.totalArea / stats.count).toFixed(3)
    }));
  };