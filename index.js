//email penerima
const emailReceiver = 'dumbways.id@gmail.com'

//formsubmit bagian function adalah objek
function submitForm(event) {

    let Name = document.getElementById('name').value
    let Email = document.getElementById('email').value
    let Number = document.getElementById('Phone number').value
    let Subject = document.getElementById('select-subject').value
    let Message = document.getElementById('your message').value

    //validasi data

    if (Name == '') {
        alert('Nama kamu harus diisi')
    }
    if (Email == '') {
        alert('email kamu harus diisi')
    }
    if (Number == '') {
        alert('nomor hp kamu harus diisi')
    }
    if (Subject == '') {
        alert('subject kamu harus diisi')
    }
    if (Message == '') {
        alert('pesan kamu harus diisi')
    }

    //menampilkan data

    console.log(Name)
    console.log(Email)
    console.log(Number)
    console.log(Subject)
    console.log(Message)


    //untuk menampilakn output di mail

    let a = document.createElement('a')
    a.href = `mailto: ${emailReceiver}?subject=${Subject}&body=Hello, my name ${Name}, ${Message}`
    a.click()

}