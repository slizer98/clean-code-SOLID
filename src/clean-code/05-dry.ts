type Size  = '' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {}


    isProductReady():boolean {
        for( const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if( (<string>this[key]).length <= 0) throw Error(`${key} is required`)
                break;
                case 'number':
                    if( (<number>this[key]) <= 0) throw Error(`${key} is Zero or less`)
                break;
                default:
                    throw Error(`Type ${typeof this[key]} is not supported`)
            }
        }
        return true;
    }
    
    toString() {
        // if( this.name.length <= 0) throw Error('Product name is required')
        // if( this.price <= 0) throw Error('Price is Zero or less')
        // if( this.size.length <= 0) throw Error('Size is required')

        if( !this.isProductReady() ) return;
        
        return `Product: ${this.name} ($${this.price}) - Size: ${this.size}`;
    }
}


(() => {
    const bluePants = new Product('Blue Pants', 100, 'XL');
    console.log(bluePants.toString());
})();