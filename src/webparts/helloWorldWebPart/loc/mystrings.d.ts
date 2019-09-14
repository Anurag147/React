declare interface IHelloWorldWebPartWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWorldWebPartWebPartStrings' {
  const strings: IHelloWorldWebPartWebPartStrings;
  export = strings;
}
