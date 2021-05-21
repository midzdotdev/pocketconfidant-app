package com.example.chattutorial;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;

public class ChannelTerms extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_channel_terms);

        getSupportActionBar().setTitle("PocketConfidant AI");
        getSupportActionBar().setBackgroundDrawable(new ColorDrawable(Color.parseColor("#20b6b6")));
    }
}