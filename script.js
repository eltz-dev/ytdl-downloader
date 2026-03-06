
async function convert(type){
  const link = document.getElementById("ytlink").value.trim()
  const status = document.getElementById("status")
  const box = document.getElementById("downloadBox")
  const btn = document.getElementById("downloadBtn")

  box.classList.add("hidden")

  if(!link){
    status.innerText = "Masukkan link YouTube dulu."
    return
  }

  status.innerText = "⏳ Sedang convert..."

  try{

    const res = await fetch(`/api/convert?type=${type}&url=${encodeURIComponent(link)}`)
    const data = await res.json()

    if(data.download){
      status.innerText = "✅ Convert selesai!"
      btn.href = data.download
      box.classList.remove("hidden")
    }else{
      status.innerText = "❌ Gagal convert."
    }

  }catch(err){
    status.innerText = "❌ Error server."
  }
}

