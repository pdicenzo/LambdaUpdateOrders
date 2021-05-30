const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
});

const https = require('https');
 
exports.handler = async (event) => {
    const params = {
        TableName: process.env.PRODUCTION_TABLE,
        Item: {
            "id": event.id,
            "name": event.name,
            "created_at": event.created_at,
            "referring_site": event.referring_site,
            "order_status_url": event.order_status_url,
            "processing_method": event.processing_method,
            "costs": {
                "total_price": event.total_price,
                "subtotal_price": event.subtotal_price,
                "total_tax": event.total_tax,
                "shipping": event.shipping,
                "total_discounts": event.total_discounts,
                "discount_codes": event.discount_codes
            },
            "line_items": event.line_items,
            "customer": {
                "first_name": event.customer_first_name,
                "last_name": event.customer_last_name,
                "email": event.customer_email,
                "city": event.city,
                "province_code": event.province_code,
                "country": event.country,
                "zip": event.zip
            }
        }
    };

    params.Item.id = event.id;
    
    return await db.put(params).promise();
};
