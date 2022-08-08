let name = "Василий";
let admin = name;
function AdminName(adminName) {
    alert(`Администратора зовут ${adminName}.`);
}
setTimeout(AdminName(admin), 5000);
