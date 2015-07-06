// Data attribute switch
var toggleState	= function (elem, one, two) {
	var elem	= document.querySelector(elem);
		elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};
	// Mobile navigation toggle selector
	var navtoggle = document.querySelector('.toggle-button');

	// Aside navigation toggle
	if (typeof(navtoggle) != 'undefined' && navtoggle != null) {
		navtoggle.onclick = function (e) {
			toggleState('.nav--docs', 'closed', 'open');
			e.preventDefault();
		};
	};

	// Search results icon selector
	var searchtoggle = document.querySelector('.octicon-search');

	// Search indicator toggle
	if (typeof(searchtoggle) != 'undefined' && searchtoggle != null) {
		searchtoggle.onclick = function (e) {
			toggleState('.nav-list--search-results', 'default', 'highlighted');
			e.preventDefault();
		};
	};


var element =  document.getElementById('elementId');
if (typeof(element) != 'undefined' && element != null)
{
  // exists.
}

// Table of contents generator
	// Choose elements from page
	var headlines	= document.querySelectorAll('.main--content h2, .main--content h3'); // Selected titles to use
	var contents	= document.querySelector('#contents'); // Selected element to append contents to

	// Create list
	var contentsList = document.createElement('ol'); // List element (ol or ul)
	contentsList.classList.add('nav-list'); // Class name for list
	contentsList.setAttribute('data-gumshoe', true);

	// Loop through items
	for (var i = 0; i < headlines.length; i++) {

		// Create list item
		var contentsItem = document.createElement('li'); // List item element
		contentsItem.classList.add('nav-item'); // Class name for list item

		// Append list item to contents list
		contentsList.appendChild(contentsItem);

		// Create link (if not span) to headline
		var link = document.createElement(headlines[i].id ? 'a' : 'span');
		link.textContent = headlines[i].textContent;

		// Add href and value plus data-scroll attribute to link
		if (headlines[i].id) {
			link.href = '#' + headlines[i].id;
			link.setAttribute('data-scroll', true);
		}

		// Append link to list item
		contentsItem.appendChild(link);
	}

	// Append list to element on page
	if (contents != null) {
		contents.appendChild(contentsList);
	}

// Position Sticky elements
if(document.getElementById("sticky")){
	PositionSticky([document.getElementById('sticky')]);
}

// Jekyll search
if(document.getElementById("search-field")){

	SimpleJekyllSearch.init({
		searchInput: document.getElementById('search-field'),
		resultsContainer: document.getElementById('search-results'),
		dataSource: "/search.json",
		searchResultTemplate: "<li class='list-item'><a href='{url}' title='{title}'>{title}</a></li>",
		fuzzy: true
	})

	// Disable enter key submission on search form
	document.getElementById('search-field').addEventListener('keypress', function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	});

}
