
(function() {
    var startTime = new Date;
    var counter = 1;
    var clientParams = {
'identityTracking': null
    };

    var script = document.getElementById('celtra-script-1');
    if (!script || script.tagName.toLowerCase() !== 'script')
        throw 'Element with id equal to scriptId does not exist or is not a script.';

    var continueImpression = function() {
        counter = 0;
        for (var k in clientParams) {
            if (clientParams[k] === null)
                clientParams[k] = { 'status': 'error', 'time': new Date - startTime, 'data': 'Timeout' };
        }
        var continueScript = document.createElement('script');
        var base64ClientParams = btoa(unescape(JSON.stringify(clientParams)));
        continueScript.src = 'https://ads.celtra.com/continue/w4qma3wttYLb_A0-eHUDugWkUhYCM0QsooGmi8pFFaCiXgFWYDjdzpIufwz74TFPjHcNEUZByxFP2GHL2bSZl6b_14d34VCyo6i7oku02LiPP4QVOzgow7XVRYhUOXa9ItvFWgKB5_ilPlcn3j5ys4815UsYZeinGEZmh363GdLEqfx_nZIbDFYcCjCHxoNldJ8e5zu3wrZt5ZQCtEFHtXBPnWfFvB3xmwpP-AKg7Tj_xqMzqLbjKDcdDzpUDwoPUCNilOYp93PSoXXNHnYmR78lVEvmAkpppEqS4yBQYPt8PJTOsWf0Uq3KNO5BezZCsoiQoKXnRT8DtDukgu38IOfEvyp8qbkBI7A_ysy_tN-MJtwfAp_dIaT0bQ1moc80WOHcHv21VgN57UWTayEKkwn7ter0mblsZd1qiN8QgJsNilYvOPpy_Uf2l4sg8uIMYLu9w4JTq2cplhBts0W1voiMCbDVyoAWxJi_4qI-34_3nIPKV9dJlTAaxDgOtlo5Ham7zx4bxlsedUZTquwj3c3PH5FFial9e2KrY7QKDHMDRr8AQdg7GIFuWtOavuBYlS-8H3Zj2VtLXCIxmM6adjgTr2LKQEfRWN-8fjqFOWLgUgDLkryq-ybcnGXbdRp0NoW2jPWiEShNP08MPQxZsc5PmaP-Qa13iqpHR8gpK3PMcyREGxBS65aVZdKenXbOjW-mjaKiwXd2bguBFbsLwmwG2vCJB7rNUxq8v8kxLXij7kVdE32AB9Q7uS3zQxERscvVxs7OPOVVptjSdQ99DCwdMsR5tAINeYyZgDxLVcbhZHzM1Heb1acR2InVPV49NOR1tX6KzAkVmRn4dGa1ybXlY0ycQZcaFB4Fvt2UXBbyOWAxOKq0Evf9GNjviXD-LNrTL9rw_5VNNs_MaQwIRobeh2Aj8npgw-DH2qrexCrgiEhLYy-yHPDov6Ia6CdUKI3xjtQc02PDW35YuWUFjpDwzk79Fg3e_kapPih2JENM6FYfp_goil8rDTJPz6bYvBjeYCeUDeFhfHmJWHoPbKONhq20DTSDNxHg58y4dH6XiRRHgJKBSWu16wsC_cFavWUzo5eutvzYP1aSn90mPClWwRwEmD6GqgKC7v7vUTCue2IJ5krdkpCrUGEdWAhGYlZO79DuGBNuLlwGDP0UvOADf6KDLL_paT3y1WWjFvFUwCoY_li_OdJW1t5axToNNjWLM0BWLFIDHLFnOGPd3Xy0fl_80c-z15uYnRw9a0XeF-xOG4Fw3c3MS4_IE3LqHZrS1kz4O3Xw4tUyJwJdAS8MUeTGo7hJhTtz2RLCPq9y3-VdcOGtvi_dRQSuyW9yU30qWrQFYNW84b-8CX_6ZP3KiMstyQ5-Blv3Z7nU6e-jwiOnqVhTUEKbLQ2aTTVS-_DM1nly87DtKxI9gwk2G4xJ8VWLd0Xyuo_JgONHQ9A3yl6pHZT71OFvW4iu4xEBgJ5l2anuXXhNklTafzcScCXNGRF-CxheySVwxHhypT2A6iy7rQ9tgXmQBn2b7uChFnfIGWVbAOT0vnlqWLGBr-T65GEEmNYR__bQI4wX9E41r93JQU3P2bkCGOS0dkXDAQXq1lapPgP7_I9TYpC4YahRMO51_ty9I-_IkY0A_xRCyPBnZOOvwu1d1Q-7u15mYLetueDihafWrtAxUpDOweUOw9kR_9Qw49fdal_1VjwkWtnQgv63nfFlilZViS9AvQPxvxUkyDg_JOYS7948ziLigJKqs4QX9sUymfOd7jEruASBkFvY3z0mv87d9jibpIP6lF8hueOUO-9EPCqF251b1EFKkMUFeisvQPdZI1UktMXqJrhMAkQ7b6IyWbu3MhKkAj5-myKYe57lnb3Jski42Xig1TyFWSIZZrPjtJl0B7s1owVxVDjp1Bz3JNmEb8YkjFb44VkH2woV0zPm_k-aiXYcl8BadMDNc2Zcx6Hz3GrxGrsLSPZeYY-FsggCVgl1kTEuLOIO85GrX-dCBFEr6ERsgbGTeV72VYsD9Jj6tPDXnbePVqF8esxeGIafDRDy0Wq_wzF0fy9kyVEMrx5CLU-WrOQDLPbbYx9dTgD6m7Zxg7Fcp_SC_MeEzGMLnZ8apXIsvC5LUP74kXxabrBpBgtVPSi1xdC_TQOtXhQFEHjfx5F5c62XaSuTObXgn5ug43X15DVjyGdTheZFa7XfN4Xc1ft3hvxBuEyYOZHAre14XAO34RYCCdqalc1y9ccH9C7QB0W5A-HQ6zzEc1jzHTNiVwQ8pABkhkQwseqIp4FogtPwwtzhsAvbjT4NNQPhZUP53mu_tYsmYfnyfs6Rdf6yUQ37Q4xYWBw2TfZyQ0g5GcqUFgrw0J8Z7sumB8JmEkEcFfVS7yDXbGp_Cjwf-3jP0uCp6dfwXLY-8a8OVJEIAIS7TXkwAzrTgHoQGkiIWV8WD0jc2__7HizerOMEYxcMtP-izjyQE8C2M6w5D2ApCpsPAGKWMDLyu-gwjnHSqNJWrltmPifFqWjNrdVgEHKeosRmJuB3x-YtOH1CdkkMvPe2VMhyFl_d3vsNm6cP2JgUCfZu5gAFAi4ZZK7qv6BNiONTr6X9hvb43U0V_ep54sMnX7fLiHqt-ymH9hq_hpRxzgJBZhOl_eGgsni4uZHG_UIPCgmVIOs4zClKsNVn6l0G5SLAIt_x4Iv3etzM2j8KNYbBZRZ2BVmmRDYVQ8RAhS9SigyghuVAsJLQPjLKJSGMDI75JdJ9-XANnU6fzxKcC-o1UiuU7m0pW3eBNTDrhdZsiJy7VM7d9qeghZcw7Ci3XAF6np1tg9jR2BTyMn9FK8Y1AjVxhK25Yudo-osbjnPCU9BiLvVSdjz3PUxEe4eGTV7dcwKC4_b1msxxLuK74gaNQEQq1KX1O-VfLfhcTzXkGmVAD-V2SRKHUuNT-E7Z7szEg-EalLnL_gVgSZbu087Z_1bM0RUzEz07-acLedYLGFuUPDAKroWtoIWguBAKJNKKKgGb1FCi9ptP0MDpdrg4relO9VJcIqBPqIyEWbXrWZIX8LGymJV1BhN-riZvVfbbAVZ2Sf40OXGp_Aljfi7r5n_6L41MTAaFQCYiorQ6XkuF0uk_iJ5IChYxIK5yfUJoii_Oo9p2wwSWD1MduoS260HXkcwDcKgyV6IWjAt-yRNKus0PL9CYWyvftvbA-GaL1x47VFlzEWa-XlbtShMUxfbmTk2abYEAgmBEJzOtvLWNedFWmOKDNMY94XpHjgjFCx_ji0i7cW0HZQfoQSEh-KretFu7_6gMIdmPQaKnu5lFOXz_qKJW9r66JmVLqDPicOfgvAVwW7PHvL5rMVH_l8w2s-eKzFL6w29NVw2llp5DtkLtuZ0fdZvwHyUBELjKrGoypIzBtn9agKUXQ9FPBVtV-5G5N_AirjcXXqnbA75LRTBFZrunpHQz9Wkf56ZQDczTepQo27b7UcTDroTt9j_WR5CqClBQstc24hq8q5WMg43DDhqZaq1kNhj_z4sbsoA2rHdRbhrdJ0sYypjJQMSHg0mbuOdh8U-cso-NG3WgJe5WyCUptminzNh56eAMObKzqmldkUmlcf2bk3ti87yOF2bIYuTc9jR5ZL2HQO5uTq8bO2zBDNuECi3v9o64QXPYOxaOmJoz4n9ePbLA9xxKYQwGdk3dgUsY9GeBCXeu1iLly5l0lF6pSRgXn3d2yPU7DQ0e2Qjd0Gmbu2xTayRs4Tcsul60ceU34t4HhadqC5pTzpD-Yc4blCr1RvDRhkdGj_VigP5aDqoqt0_Alz6kWexbZ4m-iMSZ-VFku_ic1i75Z4tz7Qpij-a96IOHsjVGMgRVTEfwqG2VvIY8GbhEqq0octV6ikiNgqtgnwMaw_LYQmI1m3gz1xSl3DA5Svv7WQgDIaRHWmB-BCmW2ySE6HD4YRSPpWfKvP5u-93k5TIfLWdJQ7Zi5_qp0vlO06D4de8ENYiBqQv93qxbkK_SQa9nph70yVGpyIZWZmUDASh_Qz35u9oX_LUBcynLtJORIFvdBzsZ1YeLnI0b3nKuI8L_1RYuuC1QM1hpkiJxHYLVQ7CFmi88NzHwJZJIUwia8JtvjHvKM8I30nqdf-FLV1ingTpZwz5SkNUPTvHlMPNt8fZRMHN-Z48SE2_fnatr20LxcHHvVG7BElUzDMZxxSfomzgHkYiJvpqZGr2NcF2wyOHi-taVH6iCxJ7ioWy3prDNkFBgx_1AbHQkH0nkrD_K3WG4Lqd3Z1IFtBn9ee4Kl7DoBhBoTkTG5YEUZBEFlsL--yAAAOzdz-scuinL3zfdxLTsVL4FOB9c4y18zVtF6MqnTxKgTGAiBANTJwvUVny2R4pgK9UOY4aVQ54klZLAkyBLX0uZynNcKlpdNG_KeVHmWTn01cpVJiUARHztsazWrZ4TBGxlq-qlBeARXIIZIAZhHQb6qqSTQ1X0OLKDBfomn6yWoGig6yAk5lN25DhJ1D7jbYVOQcKynaaicPOe3c7OTUqi0d7RaU28ABEIC8XplO1c1H9OPYw9R_ZWNZQWPfphAudD9VqhXt2twTzpxBrUz9_88qAiDpm6p0OquEulOKpGZwrvyzgPxn9wM1lLy3A7N2GpnYFwCBgvj8N_1fpw-5DSYjvI-p7sGRxhOrlYtoiLyt-7i-v_v-39R9Ip4qSHswxiKueK04C3vua8zmTBNB81Smvtp32D1OuSa851bqnRpn-mDLAqcIVE5RJWALIy6Hxg1zgI_M8XEpyBIjzVKmlXPjnT8NyOb_R-NI5CwW3Dnljkyyh0DQv959HezmWnDKWhEzkADgFbZMaPWVRS6S8ZEww4AN2Ch3UPgAiM5SUkEtwZ8eX7PqiQdnzWssTmw70EXOUJHuc2pYgJbwixBdrfGn94iXMMHUjvELEtlNd7N24sVu577i0IFOfWFWcf6OGUv4tILu69qOmDH9g7g1xvIEklAQfodolD170wrhBYr7uQV3tgeD0t22mFJWlyCbebGpJUAVeA7L7C3ieJu4hGVGLjdnmeU1YUTMuCWWfNlwBktLqifElZUQpCbzaldlKC9Hbi8k9kb0fDca_d4sh8l8LhwaYAHii3W7LkS7IxJW7k2C2bO-emWPniqCkJJ7GU6zNogLTWD_0Q32urlvQ6PhJnXJBGydPQH-XTWp5NTDNynT44lijRAi9Hw5kyYXossq7HbiouK10f-Nz95TdbloU5TAf_T1j4Ie4pPoq8Gqo8kbq8umu9HYCOPTiGJnqP-XyAY2dudO7HxZm1uLkN5v97KrqvTggAPEChxiDwYk-ki2rXhB25Yd2iV1BDJQDkPzw8PD0qEExgEk4ZfievfwrpyV-gUDSAnY5mJE9BDDHAiMW-Kz1psTtxiRBpuEr4dK4dAcQ?signature=B6s8QWhPRWLsPT_DRZBYwg&clientParams=' + encodeURIComponent(base64ClientParams);
        script.parentNode.insertBefore(continueScript, script.nextSibling);
    };

    var timeoutHandle = setTimeout(continueImpression, 2000);
    var collectParam = function(name, status, data) {
        if (clientParams[name] === null) {
            clientParams[name] = { 'status': status, 'time': new Date - startTime, 'data': data };
            if (!--counter) {
                clearTimeout(timeoutHandle);
                continueImpression();
            }
        }
    };

(function(successCb, errorCb) {
    var cbName = '__jsonp' + (Math.random() + '').slice(2);
    window[cbName] = function(data) {
        try {
            if (data.hasOwnProperty("id")) {
                successCb({ id: data.id });
            } else
                errorCb('Celtra cookie ID not defined!');
        } catch(e) {
            errorCb('Error parsing response from identity tracking service.');
        }
    };

    var script = document.createElement('script');
    script.src =  'https://celtraidentity.com/fbbdf2d8?countryCode=US&readOnly=true&cb=' + cbName;
    script.onerror = function() {
        errorCb('Identity tracking service unreachable.');
    }
    document.querySelector('head').appendChild(script);
}
    )(collectParam.bind(this, 'identityTracking', 'success'), collectParam.bind(this, 'identityTracking', 'error'));
})();