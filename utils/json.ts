export function JsonProperties(tabs?: number | string) {
    return function <T extends {
        new(...args: any[]): object
    }> (Сonstructor: T) {
        return class extends Сonstructor {
            toJSON() {
                const jsonProps = Сonstructor.prototype
                const new_this: any = {}
                for (const k of Object.keys(this)) {
                    new_this[jsonProps[k] || k] = this[k]
                }
                return JSON.stringify(new_this, null, tabs)        
            }
        }
    }
}

export function JsonProperty(name: string) {
    return function (target: any, propName: any) {
        target[propName] = name
    }
}