<!-- <script> -->
// import { defineComponent } from 'vue';
// import { ref } from 'vue';
// import * as VueGoogleMaps from 'vue2-google-maps';


// export default{
//   components: {
//     GmapMap: VueGoogleMaps.GmapMap,
//     GmapMarker: VueGoogleMaps.GmapMarker
//   },
//   setup() {
//     const center = ref({ lat: 40.7128, lng: -74.0060 }); // Initial map center coordinates
//     const zoom = ref(12); // Initial zoom level
//     const markerPosition = ref({ lat: 40.7128, lng: -74.0060 }); // Marker position

//     const markerClicked = () => {
      // Handle marker click event
//       console.log('Marker clicked!');
//     };

//     return {
//       center,
//       zoom,
//       markerPosition,
//       markerClicked
//     };
//   }
// };
<!-- // </script> -->

<!-- <template>
  <div>
    <GmapMap
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 400px"
    > -->
      <!-- Additional map components can be added here -->
      <!-- <GmapMarker
        :position="markerPosition"
        :clickable="true"
        @click="markerClicked"
      ></GmapMarker>
    </GmapMap>
  </div>
</template> -->







<template>
  <div>
    <img :src="mapImageUrl" alt="Map" />
  </div>
</template>

<script>
export default {
  computed: {
    mapImageUrl() {
      const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
      const latitude = 40.7128; // Latitude of the desired location
      const longitude = -74.0060; // Longitude of the desired location
      const zoom = 12; // Zoom level
      const width = 400; // Width of the map image
      const height = 400; // Height of the map image

      return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${width}x${height}&key=${apiKey}`;
    }
  }
};
</script>