(function() {

    const buttons = document.querySelectorAll('.btn');
    const storeImages = document.querySelectorAll(".store-item");

    buttons.forEach((button) =>  {
        button.addEventListener('click', (el) => {
            el.preventDefault();
            const filter = el.target.dataset.filter;

            storeImages.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = "block";
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = "none";
                    }
                }
            })
        })
    })
})();

// or

// app.js (Refactored)
// (function() {
//     const buttons = document.querySelectorAll('.btn');
//     const storeItems = document.querySelectorAll(".store-item");

//     buttons.forEach((button) => {
//         button.addEventListener('click', (event) => {
//             event.preventDefault();
//             const filter = event.target.dataset.filter.toLowerCase(); // Use toLowerCase() for safety

//             storeItems.forEach((item) => {
//                 const isVisible = filter === 'all' || item.classList.contains(filter);
//                 item.style.display = isVisible ? 'block' : 'none';
//             });
//         });
//     });
// })();