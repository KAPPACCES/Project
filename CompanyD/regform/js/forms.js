
function send_form() {
    // Generation of a unique ID 
    const dateString = Date.now().toString(36);
    const random_nums = Math.random().toString(16).substr(10)
    let Unique_id = dateString + random_nums;


    // Get company details from the dom
    formDetails = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        company_name: document.getElementById("company").value,
        company_type: document.getElementById("company_type").value,
        email: document.getElementById("email").value,
        country_code: document.getElementById("area_code").value,
        phone_num: document.getElementById("phone").value,
        Company_ID: Unique_id

    }


    localStorage.setItem('Company_Form_Details', JSON.stringify(formDetails))

    console.log(formDetails)

}
document.getElementById("submit").addEventListener('click', () => {
    send_form()

   
    window.location.href = "/thank.html"

})