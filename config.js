/**
 * Configuration
 * @type {{config: {mode: string, ozae: {apiKey: string}, port: number}}}
 */
module.exports = {
    // MODES : string ( dev || prod )
    mode: "dev",
    ozae: {
        apiKey: "9ea16bdd81fd42f2aaaa6c640f1ababd"
    },
    dandelion: {
        apiKey: "29b92d1f418847c5863937fd4477f77e"
    },
    port: 8060,
    datasets: ['eea_ip_2018']
};