function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === 'none') {
        dropdown.style.display = 'grid';
    } else {
        dropdown.style.display = 'none';
    }
}
