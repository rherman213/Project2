// ./src/App.js

// Imports
// ...

export default function App() {
    // Contains all individual components as well as GUN instance and control

    // Initialize gun
    const gun = GUN();

    // States
    // ...

    // Callback function to update the SVG within a child component
    const updateSVG = (newSVG) => {
        // Update the GUN database with the new SVG
        gun.get(newSVG.title).put({
            title: newSVG.title,
            svg: newSVG.svg,
        });

        // Update the SVG name list
        setSVGNameList(svgNameList.concat(newSVG.title));
    };

    // Callback function to update the SVG from the selector
    const changeCurrentSVG = (selectionTitle) => {
        // Ensure that the previously selected SVG is pushed to GUN
        gun.get(svg.title).put({
            title: svg.title,
            svg: svg.svg,
        });

        // Get the new SVG from GUN and update the state
        gun.get(selectionTitle).on((data, key) => {
            setSVG({
                title: data.title,
                svg: data.svg,
            });
        });
    };

}