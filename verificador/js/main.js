window.onload = onPageLoad(true)

function onPageLoad(e){
	const content = document.querySelector('[content]')
	
	const verify_load = {
		init(){
			const load = document.createElement('img')
			const div = document.createElement('div')
			const div_p = document.createElement('div')
			const p = document.createElement('p')
			div.classList.add('element-container')
			div.setAttribute('load', '')
			p.innerHTML = 'Verificando se há vagas disponíveis...'	
			load.src = '../img/loading-1.gif'
			load.classList.add('verify-load')
			div_p.classList.add('text-block')
			p.classList.add('p-load')
			div.appendChild(load)
			div_p.appendChild(p)
			div.appendChild(div_p)
			content.appendChild(div)
		},
		delete(){
			const delete_div = document.querySelector('[content]')
				while(delete_div.firstChild){
					delete_div.removeChild(delete_div.firstChild)
				}
			
		}
	}

	const before_load = {
		init_1(){
			const imageCaption = document.createElement('img')
			this.div = document.createElement('div')
			const div1 = document.createElement('div')
			const div2 = document.createElement('div')
			const p = document.createElement('p')
			const text = document.createTextNode('OK! Encontrado!')

			imageCaption.src = '../img/main.gif'
			imageCaption.classList.add('image-caption')

			p.classList.add('p', 'main')
			p.appendChild(text)

			div1.classList.add('text-block')
			div1.appendChild(p)

			this.div.classList.add('element-container')
			this.div.appendChild(imageCaption)
			this.div.appendChild(div1)

			before_load.fadeIn(div1)
			content.appendChild(this.div)	
		},
		init_2(){
			const p = document.createElement('p')
			const div2 = document.createElement('div')

			p.innerHTML = '<strong>1 vaga</strong> foi <strong>reservada</strong> pelos próximos <strong>10 minutos!</strong>'
			p.classList.add('p', 'second')

			div2.classList.add('text-block')
			div2.appendChild(p)

			before_load.fadeIn(div2)
			this.div.appendChild(div2)
		},
		init_3(){
			const div3 = document.createElement('div')
			const p1 = document.createElement('p')

			p1.innerHTML = '<strong>Conclua sua inscrição rápido!</strong>'
			p1.classList.add('p', 'third')	

			div3.classList.add('text-block')
			div3.appendChild(p1)

			before_load.fadeIn(div3)
			this.div.appendChild(div3)
		},
		fadeIn(element){
			let opm = 0
			let interval = 0
			let control = 0
			interval = setInterval(() => {
				if (opm < 1){
					opm = opm + 0.01
					element.style.opacity = opm
				}else{
					clearInterval(interval)
				}	
			},)
		},
	}

	function timer (){
		verify_load.init()
		setTimeout(() =>{
			verify_load.delete()
			before_load.init_1()
			
		}, 1000)
		setTimeout(() =>{
			before_load.init_2()
		}, 1400)
		setTimeout(() =>{
			before_load.init_3()
		}, 1800)
	}
	timer()

}