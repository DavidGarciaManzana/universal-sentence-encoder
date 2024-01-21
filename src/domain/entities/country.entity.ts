export class CountryEntity {
    constructor(
        public id: number,
        public name: string,
        public key?: string | null
    ) {}

    static fromObject(object: { [key: string]: any }): CountryEntity {
        const { id, name, key } = object;

        if (id === undefined) {
            throw new Error("Id is required");
        }
        if (name === undefined) {
            throw new Error("Name is required");
        }
        if (key && key.length !== 2) {
            throw new Error("Key must have 2 characters");
        }
        return  new CountryEntity(id, name, key || null);
    }
}
