type Props = string | undefined

export const cn: (...ClassNames: Props[]) => string = (...classNames: string[]) => classNames.reverse().filter((element) => element !== undefined).join(' ')
