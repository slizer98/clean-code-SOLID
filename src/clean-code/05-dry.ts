type Size  = '' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {}
    toString() {
        // if( this.name.length <= 0) throw Error('Product name is required')
        // if( this.price <= 0) throw Error('Price is Zero or less')
        // if( this.size.length <= 0) throw Error('Size is required')

        for( const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if( (<string>this[key]).length <= 0) throw Error(`${key} is required`)
                break;
                case 'number':
                    if( (<number>this[key]) <= 0) throw Error(`${key} is Zero or less`)
                break;
            }
        }
        
        return `Product: ${this.name} ($${this.price}) - Size: ${this.size}`;
    }
}


(() => {
    const bluePants = new Product('Blue Pants', 100, 'XL');
    console.log(bluePants.toString());
})();