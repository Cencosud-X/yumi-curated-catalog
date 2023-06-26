declare function useLocalStorage<T>(key: string, initialValue: T): (T | ((value: T | ((val: T) => T)) => void))[];
export default useLocalStorage;
