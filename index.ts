export class Candor {
    private readonly publicApiKey: string;

    constructor(publicApiKey:string) {
        this.publicApiKey = publicApiKey;
    }

    async verifyLicense(licenseKey:string, productId:string):Promise<boolean> {
        const response = await fetch('https://dashboard.candorservices.net/api/licenses/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.publicApiKey
            },
            body: JSON.stringify({
                key: licenseKey,
                product_id: productId
            })
        });

        if (!response.ok)  throw new Error(response.statusText);

        const data = await response.json();
        return data.success;
    }

    async getConfig(configId:string):Promise<any> {
        const response = await fetch(`https://dashboard.candorservices.net/api/configs/${configId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.publicApiKey
            },
        });

        if (!response.ok)  throw new Error(response.statusText);

        const data = await response.json();
        return data.values;
    }
}