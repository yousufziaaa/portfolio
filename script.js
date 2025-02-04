document.addEventListener("DOMContentLoaded", () => {
    function processResourceList(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const links = container.querySelectorAll(".resource-link");

        links.forEach(link => {
            let url = new URL(link.href);
            let domain = url.hostname; // Extracts "example.com"
            let siteName = domain.split('.')[0]; // Extracts "example" from "example.com"
            let faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

            // Create clickable container (entire box is a link)
            let resourceItem = document.createElement("a");
            resourceItem.className = "resource-item";
            resourceItem.href = link.href;
            resourceItem.target = "_blank";
            resourceItem.rel = "noopener noreferrer";

            // Favicon
            let favicon = document.createElement("img");
            favicon.src = faviconUrl;
            favicon.alt = "Favicon";

            // Info Container
            let infoContainer = document.createElement("div");
            infoContainer.className = "resource-info";

            // Site Name (Title)
            let siteNameEl = document.createElement("span");
            siteNameEl.className = "resource-title";
            siteNameEl.textContent = siteName.charAt(0).toUpperCase() + siteName.slice(1); // Capitalize site name

            // URL Display
            let siteUrl = document.createElement("span");
            siteUrl.className = "resource-url";
            siteUrl.textContent = domain;

            // Append elements
            infoContainer.appendChild(siteNameEl);
            infoContainer.appendChild(siteUrl);
            resourceItem.appendChild(favicon);
            resourceItem.appendChild(infoContainer);

            // Add to list
            container.appendChild(resourceItem);

            // Remove original empty link
            link.remove();
        });
    }

    // Process both sections separately
    processResourceList("inspoList");
    processResourceList("resourceList");
});