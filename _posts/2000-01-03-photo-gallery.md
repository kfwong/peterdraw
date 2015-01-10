---
title: "Photo Gallery"
bg: color_primary_3
color: black
fa-icon: picture-o
---

<div id="gallery">
	<ul>
		{% for i in (1..22) %}
		  <li class="item">
			<a href="img/{{ i }}.jpg" class="fancybox" title="Sample title" rel="gallery"><img src="img/thumbnail/{{ i }}.jpg"/></a>
		  </li>
		{% endfor %}
	</ul>
</div>