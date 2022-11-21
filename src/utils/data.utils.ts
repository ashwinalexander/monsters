//return a promise
//generic = type parameter / type variable!!!
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return response.json();
};
