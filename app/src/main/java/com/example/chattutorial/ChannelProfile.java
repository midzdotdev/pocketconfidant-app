package com.example.chattutorial;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Date;

public class ChannelProfile extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_channel_profile);
        String dateTimeKey = "com.example.app.date";
        //birthDateText.Text = dateTimeKey;
        getSupportActionBar().setTitle("PocketConfidant AI - Profile");
        getSupportActionBar().setBackgroundDrawable(new ColorDrawable(Color.parseColor("#20b6b6")));
    }

    public void ContentTap(View view) {
        Intent intent = new Intent(this, ChannelContent.class);
        startActivity(intent);
    }

    public void ChatTap(View view) {
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
    }

    public void SaveTap(View view) {
        SharedPreferences prefs = this.getSharedPreferences("com.example.app", Context.MODE_PRIVATE);

        EditText editText=findViewById(R.id.nameText);
        String temp = editText.getText().toString();
        editText=findViewById(R.id.surnameText);
        String temp1 = editText.getText().toString();
        editText=findViewById(R.id.emailText);
        String temp2 = editText.getText().toString();
        editText=findViewById(R.id.birthDateText);
        String temp3 = editText.getText().toString();

        if (temp.isEmpty() && temp1.isEmpty() && temp2.isEmpty())
        {
            Toast.makeText(getApplicationContext(),"Name and Last Name NOT Saved", Toast.LENGTH_SHORT).show();
        }
        else
        {
            String name = "com.example.app.string";
            prefs.edit().putString(name, temp).apply();
            String surname = "com.example.app.string";
            prefs.edit().putString(surname, temp1).apply();
            String email = "com.example.app.string";
            prefs.edit().putString(email, temp2).apply();
            String dateBirth = "com.example.app.string";
            prefs.edit().putString(dateBirth, temp3).apply();

            Toast.makeText(getApplicationContext(),"Name and Last Name Saved", Toast.LENGTH_SHORT).show();
        }
    }

    public void TermsTap(View view) {
        Intent intent = new Intent(this, ChannelTerms.class);
        startActivity(intent);
    }
}