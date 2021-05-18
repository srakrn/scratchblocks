var translationsAll = (function () {
  'use strict';

  var commands = {
  	"move %1 steps": "เคลื่อนที่ %1 ก้าว",
  	"turn @turnRight %1 degrees": "หัน @turnRight %1 องศา",
  	"turn @turnLeft %1 degrees": "หัน @turnLeft %1 องศา",
  	"point in direction %1": "หันในทิศทาง %1",
  	"point towards %1": "หันไปทาง %1",
  	"go to x:%1 y:%2": "ไปที่ x: %1 y: %2",
  	"go to %1": "ไปที่ %1",
  	"glide %1 secs to x:%2 y:%3": "เหิน %1 วินาที ไปยัง x: %2 y: %3",
  	"glide %1 secs to %2": "เหิน %1 วินาที ไปยัง %2",
  	"change x by %1": "เปลี่ยน x ทีละ %1",
  	"set x to %1": "ตั้งค่า x เป็น %1",
  	"change y by %1": "เปลี่ยน y ทีละ %1",
  	"set y to %1": "ตั้งค่า y เป็น %1",
  	"set rotation style %1": "ตั้งรูปแบบการหมุนเป็น %1",
  	"say %1 for %2 seconds": "พูด %1   %2 วินาที",
  	"say %1": "พูด %1",
  	"think %1 for %2 seconds": "คิด %1   %2 วินาที",
  	"think %1": "คิด %1",
  	show: "แสดง",
  	hide: "ซ่อน",
  	"switch costume to %1": "เปลี่ยนคอสตูมเป็น %1",
  	"next costume": "ชุดถัดไป",
  	"next backdrop": "ฉากหลังต่อไป",
  	"switch backdrop to %1": "เปลี่ยนฉากหลังเป็น %1",
  	"switch backdrop to %1 and wait": "เปลี่ยนฉากหลังเป็น %1 และรอ",
  	"change %1 effect by %2": "เปลี่ยนเอฟเฟกต์ %1 ทีละ %2",
  	"set %1 effect to %2": "ตั้งค่าเอฟเฟกต์ %1 เป็น %2",
  	"clear graphic effects": "ล้างเอฟเฟคภาพ",
  	"change size by %1": "เปลี่ยนขนาดทีละ %1",
  	"set size to %1%": "กำหนดขนาดเป็น %1 %",
  	"go to %1 layer": "ไปที่ระดับ %1",
  	"go %1 %2 layers": "ไป %1 %2 ระดับ",
  	"start sound %1": "เริ่มเสียง %1",
  	"clear sound effects": "ล้างเอฟเฟกต์เสียง",
  	"play sound %1 until done": "เล่นเสียง %1 จนจบ",
  	"stop all sounds": "หยุดเสียงทั้งหมด",
  	"play drum %1 for %2 beats": "เล่น %1 %2 จังหวะ",
  	"rest for %1 beats": "หยุด %1 จังหวะ",
  	"play note %1 for %2 beats": "เล่นโน๊ต %1 %2 จังหวะ",
  	"set instrument to %1": "ตั้งเครื่องดนตรีเป็น %1",
  	"change volume by %1": "เปลี่ยนระดับเสียงทีละ %1",
  	"set volume to %1%": "ตั้งระดับเสียงเป็น %1%",
  	"change tempo by %1": "เปลี่ยนความเร็วทีละ %1",
  	"set tempo to %1": "ตั้งค่าความเร็วเป็น %1จังหวะต่อนาที",
  	"erase all": "ลบทั้งหมด",
  	stamp: "ประทับ",
  	"pen down": "จรดปากกา",
  	"pen up": "ยกปากกาขึ้น",
  	"set pen color to %1": "ตั้งสีปากกาเป็น %1",
  	"change pen color by %1": "เปลี่ยนสีปากกาทีละ %1",
  	"set pen %1 to %2": "ตั้งค่า %1 ปากกาเป็น%2",
  	"change pen %1 by %2": "เปลี่ยน %1 ปากกาทีละ %2",
  	"change pen shade by %1": "เปลี่ยนเฉดสีปากกาทีละ %1",
  	"set pen shade to %1": "ตั้งค่าเฉดสีเป็น %1",
  	"change pen size by %1": "เปลี่ยนขนาดปากกาทีละ %1",
  	"set pen size to %1": "ตั้งขนาดปากกาเป็น %1",
  	"when @greenFlag clicked": "เมื่อคลิก @greenFlag",
  	"when %1 key pressed": "เมื่อกดปุ่ม %1",
  	"when this sprite clicked": "เมื่อตัวละครนี้ถูกคลิก",
  	"when stage clicked": "เมื่อคลิกเวที",
  	"when backdrop switches to %1": "เมื่อฉากหลังเปลี่ยนเป็น %1",
  	"when %1 > %2": "เมื่อ %1 > %2",
  	"when I receive %1": "เมื่อฉันได้รับ %1",
  	"broadcast %1": "กระจาย %1",
  	"broadcast %1 and wait": "กระจาย %1 และรอ",
  	"wait %1 seconds": "รอ %1 วินาที",
  	"repeat %1": "ทำซ้ำ %1",
  	forever: "วนซ้ำตลอด",
  	"if %1 then": "ถ้า %1 แล้ว",
  	"wait until %1": "รอจนกระทั่ง %1",
  	"repeat until %1": "ทำซ้ำจน %1",
  	"stop %1": "หยุด %1",
  	"when I start as a clone": "เมื่อฉันเริ่มในฐานะโคลน",
  	"create clone of %1": "สร้าง โคลน ของ %1",
  	"delete this clone": "ลบโคลนตัวนี้",
  	"ask %1 and wait": "ถาม %1 และรอ",
  	"turn video %1": "%1 วิดีโอ",
  	"set video transparency to %1%": "ตั้งค่าความโปร่งใสของวิดีโอเป็น %1",
  	"when video motion > %1": "เมื่อวิดีโอเคลื่อนไหว > %1",
  	"reset timer": "จับเวลาใหม่",
  	"set %1 to %2": "ตั้งค่า %1 เป็น %2",
  	"change %1 by %2": "เปลี่ยน %1 ทีละ %2",
  	"show variable %1": "แสดงตัวแปร %1",
  	"hide variable %1": "ซ่อนตัวแปร %1",
  	"add %1 to %2": "เพิ่ม %1 ไปยัง %2",
  	"delete %1 of %2": "ลบรายการที่ %1 ออกจาก %2",
  	"delete all of %1": "ลบทั้งหมดจาก %1",
  	"if on edge, bounce": "ถ้าชนขอบให้สะท้อนกลับ",
  	"insert %1 at %2 of %3": "แทรก %1 ที่ลำดับ %2 ของ %3",
  	"replace item %1 of %2 with %3": "แทนที่รายการที่ %1 ของ %2 ด้วย %3",
  	"show list %1": "แสดงรายการ %1",
  	"hide list %1": "ซ่อนรายการ %1",
  	"x position": "ตำแหน่ง x",
  	"y position": "ตำแหน่ง y",
  	direction: "ทิศทาง",
  	"costume #": "คอสตูม #",
  	"costume %1": "คอสตูม %1",
  	size: "ขนาด",
  	"backdrop name": "ชื่อฉากหลัง",
  	"backdrop %1": "ฉากหลัง %1",
  	"backdrop #": "ฉากหลัง #",
  	volume: "ระดับเสียง",
  	tempo: "จังหวะ",
  	"touching %1?": "แตะ %1?",
  	"touching color %1?": "แตะสี %1?",
  	"color %1 is touching %2?": "สี %1 แตะกับสี %2?",
  	"distance to %1": "ระยะห่างไปยัง %1",
  	answer: "คำตอบ",
  	"key %1 pressed?": "ปุ่ม %1 ถูกกด?",
  	"mouse down?": "เมาส์ถูกกด?",
  	"mouse x": "ตำแหน่ง x ของเมาส์",
  	"mouse y": "ตำแหน่ง y ของเมาส์",
  	"set drag mode %1": "ตั้งค่าโหมดลาก %1",
  	loudness: "ระดับความดัง",
  	"video %1 on %2": "%1 วิดีโอ บน %2",
  	timer: "จับเวลา",
  	"%1 of %2": "%1 ของ %2",
  	"current %1": "%1 ปัจจุบัน",
  	"days since 2000": "จำนวนวันตั้งแต่ปี ค.ศ 2000",
  	username: "ชื่อผู้ใช้",
  	"%1 + %2": "%1 + %2",
  	"%1 - %2": "%1 - %2",
  	"%1 * %2": "%1 * %2",
  	"%1 / %2": "%1 / %2",
  	"pick random %1 to %2": "เลือกสุ่มจาก %1 ถึง %2",
  	"%1 < %2": "%1 < %2",
  	"%1 = %2": "%1 = %2",
  	"%1 > %2": "%1 > %2",
  	"%1 and %2": "%1 และ %2",
  	"%1 or %2": "%1 หรือ %2",
  	"not %1": "ไม่ %1",
  	"join %1 %2": "ต่อ %1 %2",
  	"letter %1 of %2": "อักษรที่ %1 ของ %2",
  	"length of %1": "ความยาวของ %1",
  	"%1 mod %2": "%1 หารเอาเศษ %2",
  	"round %1": "ปัดเศษ %1",
  	"%1 contains %2?": "%1 มี %2?",
  	"item %1 of %2": "รายการที่ %1 ของ %2",
  	"item # of %1 in %2": "รายการ # ของ %1 จาก %2",
  	"turn %1 on": "เปิดมอเตอร์ %1",
  	"turn %1 off": "ปิดมอเตอร์%1",
  	"set %1 power to %2": "ตั้งค่ากำลังมอเตอร์ %1 เป็น %2",
  	"set %1 direction to %2": "ตั้งทิศทางมอเตอร์ %1 เป็น %2",
  	"when distance %1 %2": "เมื่อระยะห่าง %1 %2",
  	distance: "ระยะทาง",
  	"turn %1 on for %2 seconds": "เปิดมอเตอร์ %1 เป็นเวลา %2 วินาที",
  	"set light color to %1": "ตั้งสีหลอดไฟเป็น %1",
  	"play note %1 for %2 seconds": "เล่นโน้ต %1 เป็นเวลา %2 วินาที",
  	"when tilted %1": "เมื่อเอียง %1",
  	"tilt angle %1": "มุมเอียง %1",
  	"else": "มิฉะนั้น",
  	"user id": "รหัสผู้ใช้",
  	"loud?": "เสียงดัง?"
  };
  var dropdowns = {
  };
  var ignorelt = [
  ];
  var soundEffects = [
  	"เสียงสูงต่ำ",
  	"แพนเสียงซ้าย/ขวา"
  ];
  var osis = [
  	"สริปต์อื่นในตัวละคร"
  ];
  var definePrefix = [
  	"กำหนด"
  ];
  var defineSuffix = [
  ];
  var palette = {
  	Motion: "เคลื่อนไหว",
  	Looks: "รูปลักษณ์",
  	Sound: "เสียง",
  	Events: "เหตุการณ์",
  	Control: "ควบคุม",
  	Sensing: "ตรวจจับ",
  	Operators: "ตัวดำเนินการ",
  	Variables: "ตัวแปร",
  	"My Blocks": "บล็อกของฉัน"
  };
  var math = [
  	"ค่าสัมบูรณ์",
  	"พื้น",
  	"เพดาน",
  	"รากที่สอง",
  	"sin",
  	"cos",
  	"tan",
  	"asin",
  	"acos",
  	"atan",
  	"ln",
  	"log",
  	"e ^",
  	"10 ^"
  ];
  var aliases = {
  };
  var name = "ไทย";
  var percentTranslated = 100;
  var th = {
  	commands: commands,
  	dropdowns: dropdowns,
  	ignorelt: ignorelt,
  	soundEffects: soundEffects,
  	osis: osis,
  	definePrefix: definePrefix,
  	defineSuffix: defineSuffix,
  	palette: palette,
  	math: math,
  	aliases: aliases,
  	name: name,
  	percentTranslated: percentTranslated
  };

  var th$1 = /*#__PURE__*/Object.freeze({
    commands: commands,
    dropdowns: dropdowns,
    ignorelt: ignorelt,
    soundEffects: soundEffects,
    osis: osis,
    definePrefix: definePrefix,
    defineSuffix: defineSuffix,
    palette: palette,
    math: math,
    aliases: aliases,
    name: name,
    percentTranslated: percentTranslated,
    default: th
  });

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var require$$0 = getCjsExportFromNamespace(th$1);

  var all = {
    th: require$$0
  };

  window.scratchblocks.loadLanguages(all);
  var translationsAll = {};

  return translationsAll;

}());
//# sourceMappingURL=translations-all.js.map
