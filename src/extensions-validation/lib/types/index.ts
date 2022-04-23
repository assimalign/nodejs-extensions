
type Expression =
| { kind: '===', left: Expression, right: Expression }
| { kind: '!==', left: Expression, right: Expression }
| { kind: 'includes', left: Expression, right: Expression }
| { kind: '&&', left: Expression, right: Expression }
| { kind: 'value', value: any }
| { kind: 'index', id: string }

interface IExpression {
    constant(value: any): Expression;
    equals(left: Expression, right: Expression): Expression

}

const expression = (): IExpression => {

    const constant = (value: any): Expression => ({
        kind: 'value',
        value
    })
    const equals = (left: Expression, right: Expression): Expression => ({
        kind: '===', 
        left, 
        right
    })

    return {
        constant,
        equals
    }
}

expression().constant()

type Action = <T>(action: Function) => void;

export interface IValidationItem {

}

export interface IValidationRuleBuilder<TValue> {


}

export interface IValidationDescriptor<T> {
    ruleFor(item: IValidationItem): IValidationDescriptor;
}

const validationExpression = <T, TValue>(item: T): TValue => {

    
}


export const Configure (): IValidationDescriptor<T> => {

}


export interface IValidationProfile<T> {
    configure(descriptor: Action<IValidationDescriptor<T>>): void;
}

const validationProfile = <T>() : IValidationProfile<T> => {

}



interface IPerson {
    firstName: string;
}

const profile = validationProfile<IPerson>()
    .configure(descriptor=>{
        descriptor.
    })