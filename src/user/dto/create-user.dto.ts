import { IsNotEmpty, IsEmail, MinLength, IsPhoneNumber, Matches, IsDateString, registerDecorator, ValidationArguments, ValidationOptions, IsIn } from 'class-validator';


export function IsvalidDob(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        name: 'isAgeGreaterThan18',
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        validator: {
          validate(value: any, args: ValidationArguments) {
            const currentDate = new Date();
            const dateOfBirth = new Date(value);
            const ageDifferenceInMillis = currentDate.getTime() - dateOfBirth.getTime();
            const age = Math.floor(ageDifferenceInMillis / (1000 * 60 * 60 * 24 * 365.25));
            return age >= 18;
          },
          defaultMessage(args: ValidationArguments) {
            return 'Age must be greater than or equal to 18';
          },
        },
      });
    };
  }
export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    lastName: string;

    @IsPhoneNumber()
    phone: string;

    @IsDateString()
    @IsvalidDob()
    dob: Date;

    @IsNotEmpty()
    bio: string;
    gcm_id: string;
    @IsIn(['android', 'ios', 'web', 'window', 'linux'], {
        message: 'Invalid operating system, must be any of these android, ios, web, window, linux',
      })
    
    platform: string
}
