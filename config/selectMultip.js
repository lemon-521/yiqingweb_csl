(function() {
		selectMultip = {
			register: function(id) {
				//����˼·�ǣ�Ϊ����ѡ����һ�����ص���ѡ�ÿ�ε�ѡ֮�󽫵�ѡ��ֵ׷�ӵ����ص���ѡ���У�������ѡ��ѡ����ʾ����
				//ȫ�ֲ������б��multip��select
				document.querySelectorAll("[multip]").forEach(function(e) {
					render(e);
				})
			},
			reload: function(id, data, setData) {
				var htm = "";
				for(var i = 0; i < data.length; i++) {
					htm += '<option value="' + data[i].value + '">' + data[i].text + '</option>'
				}
				var e = document.getElementById(id);
				e.innerHTML = htm;
				render(e);
				this.setVal(id, setData);
			},
			setVal: function(id, str) {
				var type = Object.prototype.toString.call(str);
				switch(type) {
					case "[object String]":
						document.getElementById(id).val = str;
						break;
					case "[object Array]":
						document.getElementById(id).val = str.toString();
						break;
					default:
						break;
				}
			},
			getVal: function(id) {
				return document.getElementById(id).val;
			},
 
		}
 
		function render(e) {
			e.param = {
				arr: [],
				valarr: [],
				opts: []
			};
			var choosevalue = "",
				op;
 
			for(var i = 0; i < e.length; i++) {
				op = e.item(i);
				e.param.opts.push(op);
				if(op.hasAttribute("choose")) {
					if(choosevalue == "") {
						choosevalue = op.value
					} else {
						choosevalue += "," + op.value;
					}
 
				}
			}
 
			//����һ�����ص�option��ǩ�����洢��ѡ��ֵ�����е�ֵΪһ������
			var option = document.createElement("option");
			option.hidden = true;
			e.appendChild(option);
			e.removeEventListener("input", selchange);
			e.addEventListener("input", selchange);
 
			//���¶����ǩ�������Ե�get��set������ʵ��ȡֵ�͸�ֵ�Ĺ���
			Object.defineProperty(e, "val", {
				get: function() {
					return this.querySelector("[hidden]").value;
				},
				set: function(value) {
					e.param.valarr = [];
					var valrealarr = value == "" ? [] : value.split(",");
					e.param.arr = [];
					e.param.opts.filter(function(o) {
						o.style = "";
					});
					if(valrealarr.toString()) {
						for(var i = 0; i < valrealarr.length; i++) {
							e.param.opts.filter(function(o) {
								if(o.value == valrealarr[i]) {
									o.style = "color: blue;";
									e.param.arr.push(o.text);
									e.param.valarr.push(o.value)
								}
							});
						}
						this.options[e.length - 1].text = e.param.arr.toString();
						this.options[e.length - 1].value = e.param.valarr.toString();
						this.options[e.length - 1].selected = true;
					} else {
						this.options[0].selected = true;
					}
 
				},
				configurable: true
			})
			//�������choose ��������ӵ�option������ָ��Ĭ��ֵ
			e.val = choosevalue;
			//�������tip ��������ӵ�select��ǩ��
			if(e.hasAttribute("tip") && !e.tiped) {
				e.tiped = true;
				e.insertAdjacentHTML('afterend', '<i style="color: red;font-size: 12px">*�ɶ�ѡ</i>');
			}
		}
 
		function selchange() {
			var text = this.options[this.selectedIndex].text;
			var value = this.options[this.selectedIndex].value;
			this.options[this.selectedIndex].style = "color: blue;";
			var ind = this.param.arr.indexOf(text);
			if(ind > -1) {
				this.param.arr.splice(ind, 1);
				this.param.valarr.splice(ind, 1);
				this.param.opts.filter(function(o) {
					if(o.value == value) {
						o.style = "";
					}
				});
			} else {
				this.param.arr.push(text);
				this.param.valarr.push(value);
			}
			this.options[this.length - 1].text = this.param.arr.toString();
			this.options[this.length - 1].value = this.param.valarr.toString();
			if(this.param.arr.length > 0) {
				this.options[this.length - 1].selected = true;
			} else {
				this.options[0].selected = true;
			}
		}
	})();