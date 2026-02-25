function calculateDuration() {
    const pickup = new Date(document.getElementById("pickupDate").value);
    const drop = new Date(document.getElementById("dropDate").value);
    const durationText = document.getElementById("duration");

    if (pickup && drop && drop > pickup) {
        const diff = drop - pickup;
        const days = diff / (1000 * 60 * 60 * 24);
        durationText.textContent = `Duration: ${days.toFixed(1)} Day(s)`;
    } else {
        durationText.textContent = "Please select valid dates!";
    }
}


window.watsonAssistantChatOptions = {
    integrationID: "238af53b-7fdd-4205-b667-c966a17270ad", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "602c12c8-4d60-466b-906c-b35b756f0242", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
