import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateGreetPipe implements PipeTransform {
  transform(value: any) {
    const age = parseInt(value.age.toString());
    if (isNaN(age)) throw new BadRequestException('the age is not a number');

    return { ...value, age };
  }
}
