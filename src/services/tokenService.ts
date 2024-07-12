import axios from 'axios';
import qs from 'qs';

interface AccessTokenResponse {
    token_type: string;
    expires_in: number;
    ext_expires_in: number;
    access_token: string;
}

export const getAccessToken = async (): Promise<string | undefined> => {
    const tenantId: string = '0962420f-61b1-4bd3-a884-2510aaf25b58';
    const clientId: string = '4f96b74f-b177-46b8-b943-f2143da40585';
    const clientSecret: string = 'ytk8Q~6ECB2wSNleHj0Iv3BnuWdRMEicwkXUAcUK';
    const tokenEndpoint: string = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const requestBody = {
        client_id: clientId,
        scope: 'https://management.azure.com/.default',
        client_secret: clientSecret,
        grant_type: 'client_credentials'
    };

    try {
        const response = await axios.post(tokenEndpoint, qs.stringify(requestBody), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const data: AccessTokenResponse = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error obtaining access token:', error);
        return undefined;
    }
};
