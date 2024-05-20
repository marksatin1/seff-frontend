// what are types for these params?
export function transformJSONtoJS(json: any[]) {
  return json.reduce((acc: any, item: any) => {
    acc[item.name] = item.options;
    return acc;
  }, []);
}
