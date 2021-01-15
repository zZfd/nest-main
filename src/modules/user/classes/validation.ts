// import {ValidationSchema} from "class-validator";
// export let signUp: ValidationSchema = { // using interface here is not required, its just for type-safety
//     name: "signUpSchema", // this is required, and must be unique
//     properties: {
//       firstName: [{
//         type: "minLength", // validation type. All validation types are listed in ValidationTypes class.
//         constraints: [2]
//     }, {
//         type: "maxLength",
//         constraints: [20]
//     }],
//     }
// }

import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsLongerThan(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return (
            typeof value === 'string' &&
            typeof relatedValue === 'string' &&
            value.length > relatedValue.length
          ); // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}
