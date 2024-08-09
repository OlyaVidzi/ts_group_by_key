type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key];

    if (!result[keyValue as any]) {
      result[keyValue as any] = [];
    }

    result[keyValue as any].push(item);
  });

  return result;
}
