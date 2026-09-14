# Meta Lead ADS-->React Native Live Feed APP.

End-to-End real time connecting Meta's lead ads webhook to a live updating react native screen.

1.meta's lead testing tool simulates a lead form submission then sends a weebhook POST event that contains the leadgen_id to the publickly exposed tunnel via ngrok which is connected locally(localhost:4K)(as it is exposed online, so meta recognized using a public url....);

2.server acknowledge webhook connected to meta via public url,and extract lead_id;

3.this is just a test submission so, meta sends a fixed leadgen_id,server call it rather than hte graph API;

4.server sends this leads via socket.io to all connection app;
