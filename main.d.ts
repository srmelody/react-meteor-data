// Type definitions for meteor package react-meteor-data.
// Project: https://atmospherejs.com/meteor/react-meteor-data
// Definitions by:
// <https://github.com/fullflavedave>

declare module 'meteor/react-meteor-data' {
  export function createContainer(func: () => { [name: string]: any }, reactComponent: any): any;
}