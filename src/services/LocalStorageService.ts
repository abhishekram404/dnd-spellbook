export class LocalStorageService {
  static set<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  static get<T>(key: string): T | undefined {
    const rawString = localStorage.getItem(key)
    if (rawString) return JSON.parse(rawString)
  }

  static remove(key: string) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }
}
