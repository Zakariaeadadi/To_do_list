const titleInput = document.getElementById("task-input");
const descInput = document.getElementById("task-des");
const dateInput = document.getElementById("task_date");
const taskList = document.getElementById("task-list");
const footer = document.getElementById("footer");
const addBtn = document.getElementById("add-btn");
const effBtn = document.getElementById("eff-btn");

// button => add
addBtn.addEventListener("click", function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    let title = titleInput.value.trim();
    let desc = descInput.value.trim();
    let date = dateInput.value;

    if (title !== "" && desc !== "" && date !== "") {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        // العنوان
        let taskTitle = document.createElement("h3");
        taskTitle.textContent = title;

        // الوصف
        let taskDesc = document.createElement("p");
        taskDesc.textContent = desc;

        // التاريخ
        let taskDate = document.createElement("small");
        taskDate.textContent = "Échéance : " + date;

        // الأزرار
        let task_btn_com = document.createElement("button");
        task_btn_com.textContent = "✅";
        let task_btn_eff = document.createElement("button");
        task_btn_eff.textContent = "❌";

        // إضافة العناصر للـ div
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDesc);
        taskDiv.appendChild(taskDate);
        taskDiv.appendChild(task_btn_com);
        taskDiv.appendChild(task_btn_eff);

        // إضافة div إلى القائمة
        taskList.appendChild(taskDiv);

        // مسح الحقول
        titleInput.value = "";
        descInput.value = "";
        dateInput.value = "";

        // إنشاء نسخة للمهمة في footer (لكن لا نضيفها بعد)
        let footerTask = document.createElement("div");
        footerTask.classList.add("task-complete");
        footerTask.innerHTML = `<p>${title}</p>`;

        // زر ✅ (toggle)
        task_btn_com.addEventListener("click", function() {
            taskDiv.classList.toggle("task_com");

            if (taskDiv.classList.contains("task_com")) {
                // إذا أصبحت مكتملة → أضفها للـ footer
                footer.appendChild(footerTask);
            } else {
                // إذا لم تعد مكتملة → احذفها من الـ footer
                footerTask.remove();
            }
        });

        // زر ❌ (حذف المهمة + حذفها من الـ footer إن كانت موجودة)
        task_btn_eff.addEventListener("click", function() {
            taskDiv.remove();
            footerTask.remove();
        });

    } else {
        alert("Veuillez remplir tous les champs !");
    }
});

// زر effacer (لتنظيف الفورم فقط)
effBtn.addEventListener("click", function(e) {
    e.preventDefault();
    titleInput.value = "";
    descInput.value = "";
    dateInput.value = "";
});