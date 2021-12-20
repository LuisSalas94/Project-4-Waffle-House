const menu = [
	{
		id: 1,
		title: "EGG BREAKFAST",
		category: "breakfast",
		price: 8.99,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/two-eggs-scrambled-grits&toast@2x.jpg",
		desc: "Two Scrambled Eggs with Toast & Jelly; choice of Grits, Hashbrowns or Sliced Tomatoes",
		calories: 500,
	},
	{
		id: 2,
		title: "T-BONE & EGGS BREAKFAST",
		category: "breakfast",
		price: 12.99,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/steak&eggs_clipped@2x.jpg",
		desc: "USDA Choice T-Bone Steak (10-oz); Two Scrambled Eggs with Toast & Jelly; choice of Grits, Hashbrowns or Sliced Tomatoes",
		calories: 800,
	},
	{
		id: 3,
		title: "CHICKEN & EGGS BREAKFAST",
		category: "breakfast",
		price: 11.99,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/country-ham&eggs-breakfast@2x.jpg",
		desc: "Springer Mountain Farms® Grilled Chicken Breast (5-oz); Two Scrambled Eggs with Toast & Jelly; choice of Grits, Hashbrowns or Sliced Tomatoes",
		calories: 750,
	},
	{
		id: 4,
		title: "PECAN WAFFLE",
		category: "waffle",
		price: 11.99,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/pecan-waffle@2x.jpg",
		desc: "Sweet Cream Waffle made with delicious Pecan Pieces",
		calories: 650,
	},
	{
		id: 5,
		title: "PECAN WAFFLE",
		category: "waffle",
		price: 11.99,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/pecan-waffle@2x.jpg",
		desc: "Sweet Cream Waffle made with delicious Pecan Pieces",
		calories: 650,
	},
	{
		id: 6,
		title: "PEANUT BUTTER CHIP WAFFLE",
		category: "waffle",
		price: 12.19,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/peanut-butter-chip-waffle@2x.jpg",
		desc: "Sweet Cream Waffle covered in Peanut Butter Chips",
		calories: 640,
	},
	{
		id: 7,
		title: "CHICKEN BISCUIT",
		category: "biscuits",
		price: 10.5,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/chicken-biscuit@2x.jpg",
		desc: "Springer Mountain Farms® Grilled Chicken Breast served on a Grilled Biscuit",
		calories: 520,
	},
	{
		id: 8,
		title: "BISCUIT & GRAVY",
		category: "biscuits",
		price: 10.7,
		img: "https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/menu_items/biscuits-and-gravy@2x.jpg",
		desc: "One Grilled Biscuit with Sausage Gravy",
		calories: 470,
	},
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

//load items
window.addEventListener("DOMContentLoaded", () => {
	displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map((item) => {
		return `<article class="menu-item">
					    <img src=${item.img} class="photo" alt=${item.title} />
					    <div class="item-info">
						  <header>
							<h4>${item.title}</h4>
							<h4 class="price">$${item.price}</h4>
						  </header>
						  <p class="item-text">
							${item.desc}
						  </p>
					    </div>
				    </article>`;
	});
	displayMenu = displayMenu.join("");
	sectionCenter.innerHTML = displayMenu;
}

//filter items
filterBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const category = e.currentTarget.dataset.id;
		const menuCategory = menu.filter((menuItem) => {
			if (menuItem.category === category) {
				return menuItem;
			}
		});
		if (category === "all") {
			displayMenuItems(menu);
		} else {
			displayMenuItems(menuCategory);
		}
	});
});
