package com.example.chattutorial;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.widget.TextView;

public class ContentViewer extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_content_viewer);

        getSupportActionBar().setTitle("PocketConfidant AI");
        getSupportActionBar().setBackgroundDrawable(new ColorDrawable(Color.parseColor("#20b6b6")));

        Intent intent = getIntent();
        String contentTitle = intent.getExtras().getString("title");
        Double contentPrice = intent.getExtras().getDouble("price");
        String contentAbstract = intent.getExtras().getString("abstract");

        TextView myTextView1 = (TextView)findViewById(R.id.titleText);
        myTextView1.setText(contentTitle);

        TextView myTextView2 = (TextView)findViewById(R.id.priceText);
        if (contentPrice > 0.0)
        {
            myTextView2.setText(contentPrice.toString());
        }
        else
        {
            myTextView2.setText("---");
        }


        TextView myTextView3 = (TextView)findViewById(R.id.abstractText);
        myTextView3.setText(contentAbstract);
    }
}