interface Window {
  ovopark: any;
  WdzUploader: any;
}

interface Array<T> {
  /**
   * 扩展Array删除元素
   * @param {(item: T, index: number) => boolean} predicate 为function，根据筛选条件删除
   * @param {S extends T} predicate 为object时，匹配相同元素删除
   * @param {boolean} multiple 是否删除多个元素
   * @returns 数组对象
   */
  remove(predicate: (item: T, index: number) => boolean, multiple?: boolean): Array<T>;
  remove<S extends T>(predicate: S, multiple?: boolean): Array<T>;
}
