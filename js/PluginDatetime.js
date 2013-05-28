/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

 $(document).bind("pageinit", function(){

 	var Plugin={
 		plugdatetime:function ($dateTxt,type) {
 			var opt = {}
 			opt.time = {preset : type};
 			opt.date = {
 				preset : type,
 				minDate: new Date(2000,1,01,00,00), 
 				maxDate: new Date(2220,12,31,24,59), 
 				stepMinute: 1  
 			};
 			opt.datetime = { 
 				preset : type,
 				minDate: new Date(2010,1,01,00,00), 
 				stepMinute: 1  
 			};
 			$dateTxt.val('').scroller('destroy').scroller(
 				$.extend(opt[type], 
 				{ 
 					theme: "jqm", 
 					mode: "scroller", 
 					display: "modal",
 					lang: "english",
 					monthText: "��",
 					dayText: "��",
 					yearText: "��",
 					hourText: "ʱ",
 					minuteText: "��",
 					ampmText:"����/����",
 					setText: 'ȷ��',
 					cancelText: 'ȡ��',
 					dateFormat: 'yyyy-mm-dd',
 					dateOrder: 'mmD ddyy'

 				}
 				)
 				);
 		}
 	}

 	Plugin.plugdatetime($("#jzrq"), "date");
 	Plugin.plugdatetime($("#qsrq"), "date");
 });

